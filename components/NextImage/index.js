import { useLayoutEffect, useState, useEffect, useRef } from "react";
import Image from "next/image";

// USED FOR SINGLE IMAGES.....................................
// PROPS ARE SENT FROM...
const NextImage = (props) => {
  const ref = useRef(null);
  const {
    alt,
    height,
    isLoaded,
    setIsLoaded,
    src,
    sizes,
    groupCrop,
    quality,
    priority,
    width,
  } = props;

//PARENT IS THE SEROUNDING DIV - USED TO GET THE CURRENT SIZE OF THE IMAGE AS IT IS RESIZED
  const [parentSize, setParentSize] = useState({
    height,
    width
  });

  // THIS FUNCTION ONLY WORKS AFTER THE PAGE IS LOADED ON THE CLIENT
  // NOTE: IT WOULD BE NICE NOT TO HAVE TO DO THIS CALC
  const detectSize = () => {
    const newWidth =
      ref.current !== undefined ? ref.current.offsetWidth : width;
    const newHeight = Math.round((height / width) * newWidth);
    setParentSize({
      width: newWidth,
      // smallWidth: Math.ceil(20 / 100 * newWidth),
      height: newHeight,
      // smallHeight: Math.ceil(20 / 100 * newHeight),
    });
  };

  // NOT SURE IF YOU ARE MENT TO USE useLayoutEffect AND useEffect TOGETHER
  // BUT IT WORKS - WITH useLayoutEffect RUNNING FIRST AND useEffect NOT CATCHING THE FIRST LOAD
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      detectSize();
    }, []);
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [parentSize]);

// I THINK THIS CODE CAME FROM IMAGEKIT THEMSELVES
// SO WE WILL NEED TO FIND AN EQUIVALENT ON cloudinery
  const imageKitLoader = ({ src, width, quality }) => {
    if (src[0] === "/") src = src.slice(1);
    const params = [];
    if (groupCrop) {
      params.push(groupCrop);
    } else {
      params.push(`w-${width}`);
    }

    // CHECK GROUP CROP EXISTS HERE
    if (quality) {
      params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");

// The .env file seems not to be working in vercel????
// NEXT_PUBLIC_IMAGE_KIT_ID=https://ik.imagekit.io/frykds389GK3pP/Sutcliffe_Barn

    let urlEndpoint = 'https://ik.imagekit.io/frykds389GK3pP/Sutcliffe_Barn';
    if (urlEndpoint[urlEndpoint.length - 1] === "/")
      urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
  };

  return (

  /*
    THIS IS THE PARENT DIVIDE HAVING CERTAIN PROPS SET AND BEING GIVEN A REFFERENCE
    NOTE: I TRIED TO ADD A BACKGROUND IMAGE HERE IN THE PAST, BUT DIDN'T WORK
  */
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: `${parentSize.height}px`,
        margin: "0 auto",
        // opacity: isLoaded ? 1 : 0,
        opacity: 1,
        // transition: "opacity 1s ease-in-out",
        // border: "1px solid black",
      }}
    >
  
      <Image
        loader={imageKitLoader}
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        sizes={sizes}
        fill={true}
        style={{ objectFit: "contain" }}
        
  // NOTE: NEITHER OF THE onLoad FUNCTIONS SEEM TO WORK!
        // onLoad={() => {setIsLoaded(true)}}
        // onLoadingComplete={handleLoad}
       
      />
    </div>
  );
};

export default NextImage;
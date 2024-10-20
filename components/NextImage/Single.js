import { useLayoutEffect, useState, useEffect, useRef } from "react";
import Image from "next/image";

// USED FOR SINGLE IMAGES.....................................
// PROPS ARE SENT FROM...
const Single = (props) => {
  const ref = useRef(null);
  const {
    alt,
    handleLoad,
    height,
    isLoaded,
    src,
    sizes,
    quality,
    priority,
    width,
  } = props;

  console.log('SINGLE PROPS: ', props);

//PARENT IS THE SEROUNDING DIV - USED TO GET THE CURRENT SIZE OF THE IMAGE AS IT IS RESIZED
  const [parentSize, setParentSize] = useState({
    height,
    width,
    // smallHeight: 0,
    // smallWidth: 0,
  });

  // THIS FUNCTION ONLY WORKS AFTER THE PAGE IS LOADED ON THE CLIENT
  // NOTE: IT WOULD BE NICE NOT TO HAVETO DO THIS CALC
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
    const params = [`w-${width}`];
    if (quality) {
      params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");

// The .env file seems not to be working in vercel????
// NEXT_PUBLIC_IMAGE_KIT_ID=https://ik.imagekit.io/frykds389GK3pP/Sutcliffe_Barn
// let urlEndpoint = process.env.NEXT_PUBLIC_IMAGE_KIT_ID;

    let urlEndpoint = 'https://ik.imagekit.io/frykds389GK3pP/Sutcliffe_Barn';
    if (urlEndpoint[urlEndpoint.length - 1] === "/")
      urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
  };


  return (

  /*
    THIS IS THE PARENT DIVIDE HAVING CERTAIN PROPS SET AND BEING GIVEN A REFFERENCE
    NOTE: WE TRIED TO ADD A BACKGROUND IMAGE HERE IN THE PAST, BUT DIDN'T WORK
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
        transition: "opacity 1s ease-in-out",
        border: "1px solid black",
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
        
  // NOTE: NEITHER OF THE onLoad FUNCTIONS SEEN TO WORK!
        // onLoadingComplete={handleLoad}
        // onLoad={handleLoad}
      />
    </div>
  );
};

export default Single;


/* 
  NOT SURE WHAT THIS IS - I THINK THIS HAS ALL BEEN TAKE AWAY AND ADDED BY PROPS
  TO MAKE IT CLEANER AND EASIER TO USE IN MULTIPLE PLACES
      <Image
        // loader={imageKitLoader}
        src={process.env.NEXT_PUBLIC_IMAGE_KIT_ID + "/" + src}
        alt={alt}
        width={parentSize.smallWidth}
        height={parentSize.smallHeight}
        priority={true}
        quality="1"
        style={{ "object-fit": "fill" }}
        // sizes={sizes}
        // fill={true}
        // style={{ objectFit: "contain" }}
        // onLoadingComplete={handleLoad}
        // onLoad={handleLoad}
      /> 


      "background-image": `url(${process.env.NEXT_PUBLIC_IMAGE_KIT_ID}/${src}?tr=w-${parentSize.smallWidth},h-${parentSize.smallHeight})`,
      "background-size": "cover",
*/







      {/* <div
      style={{
        position: "absolute",
        left: 0,
        bottom: `-${parentSize.smallHeight}px`,
        width: `${parentSize.smallWidth}px`,
        height: `${parentSize.smallHeight}px`,
       
      }}>
        <Image
        // loader={imageKitLoader}
        src={process.env.NEXT_PUBLIC_IMAGE_KIT_ID + "/" + src}
        alt={alt}
        width={parentSize.smallWidth}
        height={parentSize.smallHeight}
        priority={true}
        quality="1"
        // sizes={sizes}
        // fill={true}
        // style={{ objectFit: "contain" }}
        // onLoadingComplete={handleLoad}
        // onLoad={handleLoad}
      />
      </div> */}
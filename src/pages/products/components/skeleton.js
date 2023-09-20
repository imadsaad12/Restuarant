import React from "react";
import {
  SkeletonContainer,
  SkeletonImage,
  SkeletonSpan,

} from "./styles";
export default function product() {
  return (
    <SkeletonContainer>
      <SkeletonImage>

      </SkeletonImage>
      <SkeletonSpan>Salads </SkeletonSpan>
      <SkeletonSpan>Fattouch </SkeletonSpan>
    </SkeletonContainer>
  );
}

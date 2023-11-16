import React, { useEffect, useState } from "react";
import { BlockMapper } from "components/ui/BlockMapper";
import { PreviewNav } from "./PreviewNav";

import { DeviceDimensions, Funnel } from "types";

type Props = {
  funnelData: Funnel | null;
};

const FALLBACK_BG_COLOR = "#f5f5f5";

export const FunnelPreview = ({ funnelData }: Props) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const totalNumberOfPages = funnelData?.pages?.length ?? 0;
  const currentPage = funnelData?.pages?.[currentPageIndex];

  const isPreviousDisabled = currentPageIndex === 0;
  const isNextDisabled = funnelData
    ? currentPageIndex === funnelData?.pages?.length - 1
    : true;

  useEffect(() => {
    // reset if FunnelData is null
    if (!funnelData) {
      setCurrentPageIndex(0);
    }
  }, [funnelData]);

  return currentPage ? (
    <div
      className="mt-6 shadow-lg overflow-y-auto px-6"
      style={{
        background: funnelData?.bgColor ?? FALLBACK_BG_COLOR,
        height: DeviceDimensions.height,
        width: DeviceDimensions.width,
      }}
    >
      <BlockMapper blocks={currentPage.blocks} />
      <PreviewNav
        onPageChange={setCurrentPageIndex}
        isPreviousDisabled={isPreviousDisabled}
        isNextDisabled={isNextDisabled}
        hide={totalNumberOfPages <= 1}
      />
    </div>
  ) : null;
};

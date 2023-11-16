import { useState } from "react";
import { FunnelPreview } from "components/ui/FunnelPreview";
import { Dropzone } from "components/ui/Dropzone";

import { ErrorMessageState, FunnelData } from "types";
import { Modal } from "components/ui/Modal";
import { Layout } from "components/ui/Layout";

export default function Home() {
  const [errorInfo, setErrorInfo] = useState<ErrorMessageState>({
    hasError: false,
    errorMessage: "",
  });

  const [funnelData, setFunnelData] = useState<FunnelData | null>(null);

  const handleFileUpload = (data: FunnelData | null) => {
    setFunnelData(data);
  };

  const handleCloseModal = () => {
    setErrorInfo({ hasError: false, errorMessage: "" });
  };
  return (
    <Layout title={`${funnelData?.name ?? "My Funnel Preview"}`}>
      <Dropzone setError={setErrorInfo} setFunnelData={handleFileUpload} />
      <FunnelPreview funnelData={funnelData} />
      <Modal
        showModal={errorInfo.hasError}
        heading="Error"
        message={errorInfo.errorMessage}
        onClose={handleCloseModal}
      />
    </Layout>
  );
}

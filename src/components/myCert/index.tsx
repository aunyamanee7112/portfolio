import { CERT_LIST } from "../../constants/cert";
import CertificateList from "./certificateList";
import Header from "../common/header";
const MyCertificate: React.FC = () => {
  const title = "My Licenses & certifications";
  return (
    <div id="cert" className="h-full py-[100px] lg:p-[150px] text-left">
      <Header title={title} />
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <CertificateList certList={CERT_LIST} />
        <div className="w-[500px] h-[500px]">
          <img className="mx-auto mt-3" src={`/src/assets/me2.jpeg`} />
        </div>
      </div>
    </div>
  );
};

export default MyCertificate;

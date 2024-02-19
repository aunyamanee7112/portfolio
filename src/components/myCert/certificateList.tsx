
import certificate from "../../assets/icon/certificate.png";
type TCertificateList = {
  certList: {
    name: string;
    provider: string;
    issued_date: string;
    url: string;
  }[];
};

const CertificateList = ({ certList }: TCertificateList) => {
  const handleRedirect = (url: string) => {
    window.open(url);
  };
  return (
    <div className="grid grid-cols-1 h-fit">
      {certList.map((cert) => (
        <div
          className="hover:bg-slate-100 flex gap-3 items-start border-b border-gray-300 px-6 py-5 h-fit text-left cursor-pointer"
          onClick={() => handleRedirect(cert.url)}
        >
          <div className="w-9">
            <img className="" src={certificate} />
          </div>
          <div>
            <p className="turncate text-md font-medium">{cert.name}</p>
            <p className="text-sm">{cert.provider}</p>
            <p className="text-sm text-gray-600">{cert.issued_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateList;

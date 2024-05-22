import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={logo1} />
          <p className="my-5">BabyButler idea</p>
          <p>© Faceit Volunteer Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Faceit Discord</p>
          <p className="my-5">Faceit Creators Discord</p>
          <p>Join the Community Clan</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Application Form</h4>
          <p className="my-5">Humprey Phoen nr.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export default function Footer() {
  return (
    <footer className="w-full flex justify-center text-[13px] bg-black text-[#999] font-arial pb-5">
      <div className="w-[70%]">
        <p className="mb-7">Questions? Call 1-866-579-7172</p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          <div className="flex flex-col">
            <a className="mb-1">FAQ</a>
            <a className="mb-1">Investor Relations</a>
            <a className="mb-1">Ways to Watch</a>
            <a className="mb-1">Corporate Information</a>
            <a className="mb-1">Netflix Originals</a>
          </div>

          <div className="flex flex-col">
            <a className="mb-1">Help Center</a>
            <a className="mb-1">Jobs</a>
            <a className="mb-1">Terms Of Use</a>
            <a className="mb-1">Contact Us</a>
          </div>

          <div className="flex flex-col">
            <a className="mb-1">Account</a>
            <a className="mb-1">Redeem Gift Cards</a>
            <a className="mb-1">Privacy</a>
            <a className="mb-1">Speed Test</a>
          </div>

          <div className="flex flex-col">
            <a className="mb-1">Media Center</a>
            <a className="mb-1">Buy Gift Cards</a>
            <a className="mb-1">Cookie Preferences</a>
            <a className="mb-1">Legal Notices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

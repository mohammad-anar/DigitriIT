
const ConversionApi = () => {
    return (
        <div className="mt-24">
      {/* heading */}
      <div className="max-w-[800px] mx-auto text-center mb-20 px-4 sm:px-0">
        <h2 className="text-5xl md:text-6xl font-semibold mb-5">
          Conversion API
        </h2>
        <p className="max-w-[8000px] w-full mx-auto ">
        Optimize your marketing efforts with precise data, improving conversion rates and maximizing ROI.
        </p>
      </div>
      {/* service body  */}
      <div className="bg-blue-100 px:[20px] pl-5 md:pl-10 lg:pl-[200px] sm:px-6 md:px-10 lg:px-[200px] py-[100px] rounded-xl">
        <h2 className="text-4xl font-medium mb-10">Whats Include</h2>
        <ul className="list list-disc list-inside space-y-2">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
        </ul>
        <div>
          <h1 className="text-4xl font-medium mb-10 mt-20" >Title</h1>
          <div className="flex gap-5 items-center justify-between">
            <h3>Item1</h3>
            <h3>Item1</h3>
            <h3>Item1</h3>
            <h3>Item1</h3>
          </div>
        </div>
      </div>
      {/* faq section  */}
      <div className="my-20 max-w-[800px] mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-20 px-4 sm:px-0">
          <h2 className="text-5xl md:text-6xl font-semibold mb-5">FA&Q</h2>
          <p className="max-w-[8000px] w-full mx-auto ">
            Easily navigate through common questions with our concise FAQ
            section. Find quick answers to your queries hassle-free.
          </p>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What services does DigiGriit provide?
          </div>
          <div className="collapse-content">
            <p>DigiGriit specializes in digital marketing, offering services such as social media management, SEO, PPC advertising, and web design.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          How long does it take to see results from SEO?
          </div>
          <div className="collapse-content">
            <p>SEO results vary, but typically improvements can be seen within 4-6 months, with significant growth over 6-12 months.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Can I customize my social media management package?
          </div>
          <div className="collapse-content">
            <p>Absolutely! At DigiGriit, we tailor social media management packages to suit your specific needs and budget.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What sets DigiGriit apart from other agencies?
          </div>
          <div className="collapse-content">
            <p>DigiGriit stands out with its data-driven strategies, dedicated customer support, and a proven track record of delivering tangible results.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-blue-100 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          How do I get started with DigiGriit&apos;s services?
          </div>
          <div className="collapse-content">
            <p>Simply reach out to us via our website or email, and our team will guide you through the process of getting started with DigiGriit.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ConversionApi;
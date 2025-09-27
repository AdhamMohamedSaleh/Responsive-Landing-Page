function Features() {
  return (
    <section id="features">
      <div className="container flex flex-col lg:justify-start items-center lg:flex-row mx-auto lg:items-start p-6 space-y-12 lg:space-y-0">
        <div className="flex flex-col items-center lg:items-start gap-12 lg:w-1/2 text-center lg:text-left">
            <h2 className="max-w-lg text-4xl font-bold ">What's different about Manage?</h2>
            <p className="max-w-sm text-gray-500">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>

        <div className="flex flex-col space-y-8 lg:w-1/2">
            
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6">
                
                <div className="rounded-l-full bg-orange-200 lg:bg-transparent">
                    <div className="flex items-center lg:space-x-2 space-x-6">
                        <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-orange-500">01</div>
                        <h3 className="text-base font-bold lg:mb-4 lg:hidden">Track company-wide progress</h3>
                    </div>
                </div>

                <div>
                    <h3 className="hidden mb-4 text-lg font-bold lg:block">Track company-wide progress</h3>
                    <p className="text-gray-500 max-w-sm"> See how your day-to-day tasks fit into the wider vision. Go from tracking
      progress at the milestone level all the way down to the smallest of
      details. Never lose sight of the bigger picture again.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6">
                
                <div className="rounded-l-full bg-orange-200 lg:bg-transparent">
                    <div className="flex items-center lg:space-x-2 space-x-6">
                        <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-orange-500">02</div>
                        <h3 className="text-base font-bold lg:mb-4 lg:hidden">Advanced built-in reports</h3>
                    </div>
                </div>

                <div>
                    <h3 className="hidden mb-4 text-lg font-bold lg:block">Advanced built-in reports</h3>
                    <p className="text-gray-500 max-w-sm">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6">
                
                <div className="rounded-l-full bg-orange-200 lg:bg-transparent">
                    <div className="flex items-center lg:space-x-2 space-x-6">
                        <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-orange-500">01</div>
                        <h3 className="text-base font-bold lg:mb-4 lg:hidden">Everything you need in one place</h3>
                    </div>
                </div>

                <div>
                    <h3 className="hidden mb-4 text-lg font-bold lg:block">Everything you need in one place</h3>
                    <p className="text-gray-500 max-w-sm">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                </div>
            </div>

        </div>
        
      </div>
    </section>
  );
};

export default Features;
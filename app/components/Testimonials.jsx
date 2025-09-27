import Image from "next/image";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-6xl mx-auto px-5 mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">What's different about Manage?</h2>
        <div className="flex flex-col lg:flex-row mt-24 space-y-12 lg:space-y-0 lg:space-x-6">
            <div className="flex flex-col items-center mx-auto w-1/2 space-y-6 p-6 rounded-lg bg-gray-100 lg:w-1/3">
            <Image src="/avatar-anisha.png" alt="Testm-01" className="-mt-14" width={64} height={96}/>
            <h5 className="txt-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-gray-500">Manage offers an all-in-one team productivity solution. What they’ve said Anisha Li “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
            </div>
                        <div className="hidden lg:flex flex-col items-center space-y-6 p-6 rounded-lg bg-gray-100 lg:w-1/3">
            <Image src="/avatar-ali.png" alt="Testm-01" className="-mt-14" width={64} height={96}/>
            <h5 className="txt-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-gray-500">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
            </div>            <div className="hidden lg:flex flex-col items-center space-y-6 p-6 rounded-lg bg-gray-100 lg:w-1/3">
            <Image src="/avatar-richard.png" alt="Testm-01" className="-mt-14" width={64} height={96}/>
            <h5 className="txt-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-gray-500">“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
            </div>
        </div>
        <button className="btn mt-12">Get Started</button>
      </div>
    </section>
  );
};

export default Testimonials;
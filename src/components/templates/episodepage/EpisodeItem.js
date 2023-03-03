function EpisodeItem(props){
    const itemlimit = props.limit;

    let audio = new Audio("episode/audio.mp3")

    const start = () => {
        audio.play()
    }

    return(
        <div className="w-full pt-14 pb-0 md:pb-14">
            <div className="xl:containerxl lg:containerlg md:containermd sm:containersm">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="mb-8">
                        <img src="img/user.png" className="" alt="episode"/>
                        <h3 className="inter font-semibold text-2xl mt-6 mb-3 themeblack">Ep 1: How to build a world-class business brand</h3>
                        <p className="themeblack inter font-normal text-md mb-4">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <span onClick={start} className="inter font-semibold text-md text-[#503AE7] items-center hover:cursor-pointer"><i className="fa fa-play w-8 h-8 bgBlue text-white rounded-full text-center leading-8 text-xs mr-3"></i> Listen Now</span>
                    </div>
                    <div className="mb-8">
                        <img src="img/user1.png" className="" alt="episode"/>
                        <h3 className="inter font-semibold text-2xl mt-6 mb-3 themeblack">Ep 1: How to build a world-class business brand</h3>
                        <p className="themeblack inter font-normal text-md mb-4">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <span onClick={start} className="inter font-semibold text-md text-[#503AE7] items-center hover:cursor-pointer"><i className="fa fa-play w-8 h-8 bgBlue text-white rounded-full text-center leading-8 text-xs mr-3"></i> Listen Now</span>
                    </div>
                    <div className="mb-8">
                        <img src="img/user2.png" className="" alt="episode"/>
                        <h3 className="inter font-semibold text-2xl mt-6 mb-3 themeblack">Ep 1: How to build a world-class business brand</h3>
                        <p className="themeblack inter font-normal text-md mb-4">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <span onClick={start} className="inter font-semibold text-md text-[#503AE7] items-center hover:cursor-pointer"><i className="fa fa-play w-8 h-8 bgBlue text-white rounded-full text-center leading-8 text-xs mr-3"></i> Listen Now</span>
                    </div>
                </div>
            </div>
            <p className="hidden">{itemlimit}</p>
        </div>
    )
}
export default EpisodeItem;
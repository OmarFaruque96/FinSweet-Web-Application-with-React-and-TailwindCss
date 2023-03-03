function BlogItem(props){
    const itemlimit = props.limit;
    return(
        <div>
            <div className="mb-6">
                <img src="img/blog1.png" className="" alt="episode"/>
                <h3 className="inter font-semibold text-2xl mt-6 mb-3 themeblack">Ep 1: How to build a world-class business brand</h3>
                <p className="themeblack inter font-normal text-md mb-4">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                <p className="hidden">{itemlimit}</p>
                <span className="inter font-semibold text-md text-[#503AE7] items-center hover:cursor-pointer">Read Now</span>
            </div>
        </div>
    )
}
export default BlogItem;
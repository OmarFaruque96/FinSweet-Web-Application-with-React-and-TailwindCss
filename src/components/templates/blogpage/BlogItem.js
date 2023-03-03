function BlogItem(props){
    const title = props.title;
    const except = props.except;
    const thumbnail = props.thumbnail;
    return(
        <div>
            <div className="mb-6">
                <img src={thumbnail} className="" alt="episode"/>
                <h3 className="inter font-semibold text-2xl mt-6 mb-3 themeblack">{title}</h3>
                <p className="themeblack inter font-normal text-md mb-4">{except}</p>
                <span className="inter font-semibold text-md text-[#503AE7] items-center hover:cursor-pointer hover:underline hover:decoration-2">Read Now</span>
            </div>
        </div>
    )
}
export default BlogItem;
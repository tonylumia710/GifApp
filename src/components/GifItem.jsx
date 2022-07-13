
export const GifItem = ({imagen:{title, url, id}, removeById}) => {
    return (
        <div className="card">
            <button href="#" onClick={() => removeById(id)} className='myButton'>X</button> 
            <img src={url} alt="gif" />
            <p>{title}</p>
        </div>
    )
}
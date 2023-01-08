export default function MovieBox(props) {
    const {data} = props;
    function renderFarm() {
        return data.mostviewedvideos.map(function (item){
            return (<div>
                <div className="hover-box-parent">
                    <img className="img" src={item.big_poster}/>
                    <div className="hover-box">
                        <div className="hover-item">
                            <div className='flex-8gap-row'>
                                <img src={require('./assets/heart.png')}></img>
                                {/* age jarime sham eshkal nadare, be bug khordam raftam donbale rahe hallesh */}
                                <span className="p-white font-bold vazirfa">{item.rate}</span>
                            </div>
                            <p className="p-white description-size font-bold ">IMDB {item.imdb}</p>
                            <p className="p-white description-size font-bold vazirfa">تاریخ ساخت: {item.sdate}</p>
                        </div>
                    </div>
                </div>
                <p className="p-white description-size">
                {item.title}
                </p>
            </div>
            )
        })
    }
    return(
        <div className="movie-box">
            {renderFarm()}
        </div>
    )
}
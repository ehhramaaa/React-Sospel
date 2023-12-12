const Preloader = () => {
    return (
        <div>
            <div className="preloader">
                <svg viewBox="-2000 -1000 4000 2000">
                    <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z" />
                    <use xlinkHref="#inf" strokeDasharray="1570 5143" strokeDashoffset="6713px" />
                </svg>
            </div>
        </div>
    )
}

export default Preloader
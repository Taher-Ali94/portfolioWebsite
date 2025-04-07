

const HeroOrbit = ({children , size , rotate}) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin [animation-duration:50s] ">
            <div className="" style={{height : `${size}px`,width : `${size}px` , transform : `rotate(${rotate}deg)`}}>
                <div className="inline-flex animate-spin [animation-duration:10s]" style={{transform : `rotate(${rotate * -1}deg)`}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeroOrbit
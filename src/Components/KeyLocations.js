
function KeyLocations({keyLocationObj}) {
    const renderKeyLoc = keyLocationObj.map(loc=> {
        return (
            <div>
                <h1>{loc.name}</h1>
            </div>
        )
    })
    return (
        <div>
            {renderKeyLoc}
        </div>
    )
}

export default KeyLocations
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function ModalRules({
    onclose
}) {
    function modalClick(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    const isPhone = useMediaQuery('(max-width: 600px)')
    if(isPhone) return(
    <div className="modal">
        <div className="modalBox modalBoxPhone">
            <h3>Rules</h3>
            <div className="modalBody">
                <img src="/image-rules-bonus.svg" />
            </div>
            <div onClick={onclose} className="close"><img src="/icon-close.svg" /></div>
        </div>
    </div>
    )
    return(
        <div className="modal" onClick={onclose}>
            <div className="modalBox" onClick={(e) => modalClick(e)}>
                <div className="modalHead">
                    <h3>Rules</h3>
                    <div onClick={onclose} className="close"><img src="/icon-close.svg" /></div>
                </div>
                <div className="modalBody">
                    <img src="/image-rules-bonus.svg" />
                </div>
            </div>
        </div>
    )
}
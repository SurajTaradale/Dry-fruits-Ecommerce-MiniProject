import React from "react";
import '../style/BUtton.css'
function FixButton() {
    return (
        <>
            <a href='tel:'>
                <div type="button" className="email-bt">
                    <div className="text-call">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>Call</span>
                    </div>
                </div>
            </a>
        </>
    );
}
export default FixButton;
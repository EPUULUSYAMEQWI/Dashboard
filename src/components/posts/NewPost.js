import React from "react";

import Sidebar from "../sidebar/Sidebar";
import Topbar from "../sidebar/Topbar";
import "./newPost.css";

function NewPost() {
    return (
        <div className="container-fluid">
            <div className="wrapper">
                <Sidebar />
                <div id="content">
                    <Topbar />
                    <div className="registration-form">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control item" id="username" 
                                placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control item" id="email" 
                                placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea class="form-control item" aria-label="With textarea" 
                                placeholder="Write something beautiful..." style={{ height: "200px" }}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary btn-block create-account">
                                    Create Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default NewPost;
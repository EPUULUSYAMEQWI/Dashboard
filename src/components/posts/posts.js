import React from "react";

import Sidebar from "../sidebar/Sidebar";
import Topbar from "../sidebar/Topbar";

import "./posts.css";

function Posts() {
    return (
        <div className="container-fluid">
            <div className="wrapper">
                <Sidebar />
                <div id="content">
                    <Topbar />
                    <div>
                        <article className="col-md-12">
                            <div className="cards-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="table table-info">
                                                    <h5 className="category-social">
                                                        Todays News
                                                    </h5>
                                                    <h4 className="card-caption">
                                                        Our next step will be to style the input and list elements we created. 
                                                        We will do this with CSS. We use CSS to select our input with the id 
                                                        myInput and our list with the id myUL.
                                                    </h4>
                                                    <div className="ftr">
                                                        <div className="author">
                                                            <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="" className="avatar img-raised" /> <span>I'm Yes</span>
                                                        </div>
                                                        <div className="stats"> <i className="fa fa-heart"></i> 365 &nbsp; <i className="fa fa-share-alt"></i> 120 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="table table-info">
                                                    <h5 className="category-social">
                                                        Todays News
                                                    </h5>
                                                    <h4 className="card-caption">
                                                        Our next step will be to style the input and list elements we created. 
                                                        We will do this with CSS. We use CSS to select our input with the id 
                                                        myInput and our list with the id myUL.
                                                    </h4>
                                                    <div className="ftr">
                                                        <div className="author">
                                                            <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="" className="avatar img-raised" /> <span>I'm me</span>
                                                        </div>
                                                        <div className="stats"> <i className="fa fa-heart"></i> 365 &nbsp; <i className="fa fa-share-alt"></i> 120 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="table table-info">
                                                    <h5 className="category-social">
                                                        Todays News
                                                    </h5>
                                                    <h4 className="card-caption">
                                                        Our next step will be to style the input and list elements we created. 
                                                        We will do this with CSS. We use CSS to select our input with the id 
                                                        myInput and our list with the id myUL.
                                                    </h4>
                                                    <div className="ftr">
                                                        <div className="author">
                                                            <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="" className="avatar img-raised" /> <span>I'm he</span>
                                                        </div>
                                                        <div className="stats"> <i className="fa fa-heart"></i> 365 &nbsp; <i className="fa fa-share-alt"></i> 120 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;

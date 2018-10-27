import React from 'react';

const ProjectDetail = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Title
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae porro optio esse vel rerum atque quos itaque officiis delectus facilis iste, illum rem hic velit. Sapiente, similique! Veniam, totam.</p>
                    <div className="card-action grey lighten-3 grey-text">
                        <div>Posted by Karan</div>
                        <div>2nd of sep</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;

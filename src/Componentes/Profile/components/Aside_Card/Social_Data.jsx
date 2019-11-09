import React from 'react'

const Social_Data = (props) => {
    return (
        <div class="row">
            <div class="col">
                <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                        <span class="heading">{props.friends}</span>
                        <span class="description">Friends</span>
                    </div>
                    <div>
                        <span class="heading">{props.photos}</span>
                        <span class="description">Photos</span>
                    </div>
                    <div>
                        <span class="heading">{props.comments}</span>
                        <span class="description">Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social_Data

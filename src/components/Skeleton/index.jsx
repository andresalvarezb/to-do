import React from 'react';
import './skeleton.css'

function Skeleton() {
    return (
        <div className='SkeletonCounter'>
            <div className='SkeletonHeader'>
                <div className="SkeletonHeader-h1"></div>
                <div className="SkeletonHeader-p"></div>
            </div>
            <div className="Skeleton-input"></div>
            <div>
                <div className='SkeletonList'>
                    <div className="SkeletonList-item">
                        <i className='SkeletonItem-icon'> </i>
                        <p className='SkeletonItem-p'></p>
                        <i className='SkeletonItem-icon'></i>
                    </div>
                </div>
            </div>
            <div className='SkeletonItem-button'></div>
        </div>
    )
}

export default Skeleton;

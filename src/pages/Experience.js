import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {School} from '@mui/icons-material'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='Navy'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2016-Present' iconStyle={{background:"#3e497a", color:"#fff"}} icon={<School />}> 
        <h3 className='vertical-timeline-element-title'> Computer Science and Information Security, Bachelor of Science </h3>
        <p> City University of New York</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2016-Present' iconStyle={{background:"#3e497a", color:"#fff"}} icon={<School />}> 
        <h3 className='vertical-timeline-element-title'> Computer Science and Information Security, Bachelor of Science </h3>
        <p> City University of New York</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2016-Present' iconStyle={{background:"#3e497a", color:"#fff"}} icon={<School />}> 
        <h3 className='vertical-timeline-element-title'> Computer Science and Information Security, Bachelor of Science </h3>
        <p> City University of New York</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
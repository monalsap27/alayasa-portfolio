import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import ScrollToTop from '../components/ScrollToTop';

function Experience() {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
        <h1>Experience</h1>

<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: '#eb348f', color: '#fff' }}
    icon={<FaLaravel/>}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: '#f25129', color: '#fff' }}
    icon={<DiCodeigniter/>}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: '#7a29f2', color: '#fff' }}
    icon={<FaPhp/>}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>

    </div>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default Experience

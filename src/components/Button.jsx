import { useState } from 'react';

function Button(props) {
  const [active, setActive] = useState('day');

  const handleClick = (group) => {
    setActive(group);
    props.data(group)
  };

  return (
    <div className="selector_wrap">
      <div className="selector">
        <div className={`anchor ${active === 'day' ? 'selected' : ''}`}>
          <h6>
            <a
              className="no_click"
              onClick={() => handleClick('day')}
              data-panel="trending_scroller"
              data-group="day"
            >Today <span className="glyphicons_v2 chevron-down"></span>
            </a>
          </h6>
          <div className="background"></div>
        </div>

        <div className={`anchor ${active === 'week' ? 'selected' : ''}`}>
          <h6>
            <a
            className="no_click"
              onClick={() => handleClick('week')}
              data-panel="trending_scroller"
              data-group="week"
            >
              This Week
            <span className="glyphicons_v2 chevron-down"></span>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Button;

















// function Button() {

  
//   return (
//     <div className="selector_wrap">
//             <div className="selector">
//               <div className="anchor ">
//                 <h6><a href="#" className="no_click" data-panel="trending_scroller" data-group="day">Today <span className="glyphicons_v2 chevron-down"></span></a></h6>
//                 <div className="background"></div>
//               </div>

//               <div className="anchor selected">
//                 <h6><a href="#" className="no_click" data-panel="trending_scroller" data-group="week">This Week <span className="glyphicons_v2 chevron-down"></span></a></h6>
//               </div>
//             </div>
//           </div>
//   )
// }

// export default Button
import React from 'react';
import List from '../../UI/list';

function FeatureList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* First Column */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <List title="Experienced Faculty Members" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem tortor, fringilla feugiat pulvinar et, porta et leo. Aliquam vestibulum luctus metus vel vehicula. Etiam eget nulla sapien. Nam eget elementum tortor, vel condimentum odio. Ut a feugiat tellus. Integer at posuere nunc. Ut euismod nunc enim, ac volutpat ex." />
      </div>

      {/* Second Column */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <List title="Experienced Faculty Members" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem tortor, fringilla feugiat pulvinar et, porta et leo. Aliquam vestibulum luctus metus vel vehicula. Etiam eget nulla sapien. Nam eget elementum tortor, vel condimentum odio. Ut a feugiat tellus. Integer at posuere nunc. Ut euismod nunc enim, ac volutpat ex." />
      </div>

      {/* Third Column */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <List title="Experienced Faculty Members" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem tortor, fringilla feugiat pulvinar et, porta et leo. Aliquam vestibulum luctus metus vel vehicula. Etiam eget nulla sapien. Nam eget elementum tortor, vel condimentum odio. Ut a feugiat tellus. Integer at posuere nunc. Ut euismod nunc enim, ac volutpat ex." />
      </div>

      {/* Fourth Column */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <List title="Experienced Faculty Members" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem tortor, fringilla feugiat pulvinar et, porta et leo. Aliquam vestibulum luctus metus vel vehicula. Etiam eget nulla sapien. Nam eget elementum tortor, vel condimentum odio. Ut a feugiat tellus. Integer at posuere nunc. Ut euismod nunc enim, ac volutpat ex." />
      </div>
    </div>
  );
}

export default FeatureList;

// ChartGallery.jsx
import { motion } from "framer-motion";
import chartImg1 from '../assets/ChartMaker1.jpeg';
import chartImg2 from '../assets/DataAnalyzer2.jpeg';

const charts = [
  {
    title: "3D Surface Chart",
    type: "Advanced Visualization",
    image: chartImg1,
    buttonLabel: "ChartMaker",
  },
  {
    title: "Sales Bar Chart",
    type: "Dynamic Data View",
    image: chartImg2,
    buttonLabel: "Data Analyzer",
  },
];

const ChartGallery = () => {
  return (
    <section
      className="py-20 px-5 sm:px-10"
      id="chart-gallery"
      style={{
        background:
          "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chart Gallery
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Visualize your uploaded Excel data with stunning charts — from simple bar graphs to complex 3D visuals.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-10">
          {charts.map((chart, index) => (
         <motion.div
  key={index}
  className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-transparent border border-white/20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
>


              {/* Image section - fills full width */}
              <div className="w-full h-[260px] overflow-hidden relative rounded-t-xl">
                <img
                  src={chart.image}
                  alt={chart.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Button section */}
              <div className="p-6 text-left flex justify-between items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {chart.title}
                  </h3>
                  <p className="text-sm text-gray-600">{chart.type}</p>
                </div>
                <motion.button
                  className="bg-indigo-700 text-white text-base px-3 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {chart.buttonLabel}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChartGallery;

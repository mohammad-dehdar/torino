const FeatureCard = ({ feature }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
      {feature.icon}
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

export default FeatureCard;
import ResRequest, { IResRequest } from '@/components/ResRequest';

const data: IResRequest[] = [
  {
    name: 'NDRF - Tamil Nadu',
    details: 'National Disaster Response Force in Tamil Nadu',
    location: [12.9716, 77.5946],
  },
  {
    name: 'TN SDMA',
    details: 'Tamil Nadu State Disaster Management Authority',
    location: [13.0827, 80.2707],
  },
  {
    name: 'Indian Red Cross - Coimbatore',
    details: "Indian Red Cross Society's Coimbatore Chapter",
    location: [11.0168, 76.9558],
  },
  {
    name: 'CARE India - Chennai Office',
    details: "CARE India's office in Chennai",
    location: [13.0827, 80.2707],
  },
  {
    name: 'Save the Children - Chennai',
    details:
      "Save the Children's office in Chennai, providing child-focused disaster relief.",
    location: [13.0827, 80.2707],
  },
  {
    name: 'World Food Programme - Tamil Nadu',
    details:
      "WFP's initiatives in Tamil Nadu to provide food assistance during disasters.",
    location: [13.0827, 80.2707],
  },
  {
    name: 'ActionAid India - Madurai',
    details:
      "ActionAid's presence in Madurai, offering disaster relief and community support.",
    location: [9.9252, 78.1198],
  },
  {
    name: 'ShelterBox - Tamil Nadu',
    details:
      "ShelterBox's efforts to provide emergency shelter and tools in Tamil Nadu.",
    location: [11.0168, 76.9558],
  },
];

export default function HomePage() {
  return (
    <div className='mt-5 flex flex-col items-center justify-center gap-4'>
      <h1>Requests</h1>
      {data.map((v, i) => (
        <ResRequest
          key={i}
          name={v.name}
          details={v.details}
          location={v.location}
        />
      ))}
    </div>
  );
}

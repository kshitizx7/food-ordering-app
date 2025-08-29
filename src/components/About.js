import UserInfo from "./userInfo";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        👥 About Us
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Meet our amazing team! We’re passionate about building great software,
        solving problems, and creating meaningful user experiences.
      </p>

      {/* Team Members Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <UserInfo
          location={"India"}
          profile={"Developer"}
          user_name={"kshitizx7"}
        />
        <UserInfo
          location={"India"}
          profile={"Data Engineer"}
          user_name={"akshaymarch7"}
        />
        <UserInfo
          location={"India"}
          profile={"Logistics & Operations Head"}
          user_name={"hiteshchoudhary"}
        />
      </div>
    </div>
  );
};

export default About;

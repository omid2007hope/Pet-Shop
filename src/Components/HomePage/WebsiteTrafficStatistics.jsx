import { Award, Clock4, Users } from "lucide-react";

export default function WebsiteTrafficStatistics() {
  return (
    <div className="w-full h-auto z-35 flex items-center justify-center py-8 md:py-20 lg:py-20">
      <div className="w-full h-full flex items-center justify-center">
        {/* Veterinarians */}
        <div className="w-1/3 flex flex-col items-center gap-4">
          <div className="p-3 md:p-10 lg:p-10 rounded-full bg-blue-100 text-blue-600">
            <Users size={35} />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl lg;text-3xl">5,000+</h1>
          <p className="text-1xl md:text-lg lg:text-lg text-black/50">
            Veterinarians
          </p>
        </div>

        {/* Pet Owners */}
        <div className="w-1/3 flex flex-col items-center gap-4">
          <div className="p-3 md:p-10 lg:p-10 rounded-full bg-green-100 text-green-600">
            <Award size={35} />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl lg;text-3xl">
            200,000+
          </h1>
          <p className="text-1xl md:text-lg lg:text-lg text-black/50">
            Pet Owners
          </p>
        </div>

        {/* Appointments */}
        <div className="w-1/3 flex flex-col items-center gap-4">
          <div className="p-3 md:p-10 lg:p-10 rounded-full bg-purple-100 text-purple-600">
            <Clock4 size={35} />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl lg;text-3xl">1M+</h1>
          <p className="text-1xl md:text-lg lg:text-lg text-black/50">
            Appointments
          </p>
        </div>
      </div>
    </div>
  );
}

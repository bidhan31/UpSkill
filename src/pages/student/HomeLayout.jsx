import React from "react";
import Hero from "../../components/student/Hero";
import CourseSection from "../../components/student/CourseSection";

import ActionCall from "../../components/student/ActionCall";
import TestimonialSection from "../../components/student/TestimonialSection";
import LearnMoreComponent from "../../components/student/LearnMoreComponent";

const HomeLayout = () => {
  return (
    <div>
      <Hero></Hero>
      <LearnMoreComponent></LearnMoreComponent>
      <CourseSection></CourseSection>
      <TestimonialSection></TestimonialSection>
      <ActionCall></ActionCall>
    </div>
  );
};

export default HomeLayout;

import AuthVsAuthorization from "components/Blogs/AuthVsAuthorization";
import CssGridFlexboxGuide from "components/Blogs/CssGridFlexboxGuide";
import DatabaseDesignPatterns from "components/Blogs/DatabaseDesignPatterns";
import DevopsJSDevelopers from "components/Blogs/DevopsJSDevelopers";
import GraphQLVsRest from "components/Blogs/GraphQLVsRest";
import MasteringReactHooks from "components/Blogs/MasteringReactHooks";
import MicroservicesNodejsDocker from "components/Blogs/MicroservicesNodejsDocker";
import NextjsServerComponents from "components/Blogs/NextjsServerComponents";
import ReactStateManagement from "components/Blogs/ReactStateManagement";
import ScalableNodejsApis from "components/Blogs/SaclableNodejsApis";
import TestingFullstackJavascript from "components/Blogs/TestingFullstackJavascript";
import TypeScriptGuide from "components/Blogs/TypeScriptGuide";
import WebPerformanceOptimization from "components/Blogs/WebPerformanceOptimization";
import Container from "components/Container";
import { useRouter } from "next/router";
import React from "react";

const BlogPost = () => {
  const { query } = useRouter();
  const slug = query.slug;

  const postMapper = [
    {
      slug: "mastering-react-hooks",
      component: <MasteringReactHooks />,
    },
    {
      slug: "scalable-nodejs-apis",
      component: <ScalableNodejsApis />,
    },
    {
      slug: "typescript-practical-guide",
      component: <TypeScriptGuide />,
    },
    {
      slug: "nextjs-14-server-components",
      component: <NextjsServerComponents />,
    },
    {
      slug: "database-design-patterns",
      component: <DatabaseDesignPatterns />,
    },
    {
      slug: "authentication-authorization",
      component: <AuthVsAuthorization />,
    },
    {
      slug: "css-grid-flexbox-guide",
      component: <CssGridFlexboxGuide />,
    },
    {
      slug: "microservices-nodejs-docker",
      component: <MicroservicesNodejsDocker />,
    },
    {
      slug: "react-state-management",
      component: <ReactStateManagement />,
    },
    {
      slug: "web-performance-optimization",
      component: <WebPerformanceOptimization />,
    },
    {
      slug: "graphql-vs-rest",
      component: <GraphQLVsRest />,
    },
    {
      slug: "testing-fullstack-javascript",
      component: <TestingFullstackJavascript />,
    },
    {
      slug: "devops-javascript-developers",
      component: <DevopsJSDevelopers />,
    },
  ];

  return <>{postMapper?.find((post) => post.slug === slug)?.component}</>;
};

export default BlogPost;

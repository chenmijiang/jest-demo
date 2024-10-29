/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  clearMocks: true,
  collectCoverage: true,
  // 模拟浏览器环境，需要下载 jest-environment-jsdom 包
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/test/**/*.test.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
};

export default config;

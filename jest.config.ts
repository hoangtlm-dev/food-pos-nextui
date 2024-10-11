/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.tsx',
    '!**/node_modules/**',
    '!**/*.config.ts',
    '!<rootDir>/.storybook/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/src/app/**',
    '!<rootDir>/src/constants/**',
    '!<rootDir>/src/mocks/**',
    '!<rootDir>/src/themes/**',
    '!<rootDir>/src/types/**'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['^.*index\\.ts$'],
  coverageProvider: 'v8',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: './node_modules/ts-jest-mock-import-meta', // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules
              options: {
                metaObjectReplacement: {
                  env: {
                    NEXT_BASE_API_URL: 'https://mocked-api-url.com/api',
                    NEXT_PAGINATION_API_URL: 'https://mocked-pagination-url.com'
                  }
                }
              }
            }
          ]
        }
      }
    ],
    '.+\\.(css|svg|webp|styl|less|sass|scss|png|jpg|otf|ttf|woff|woff2)$': 'jest-transform-stub'
  }
}

export default config

# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and yarn.lock to take advantage of layer caching
COPY package.json yarn.lock ./

# Install dependencies (including development dependencies)
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app (only necessary for production)
RUN yarn build

# Stage 2: Serve the app with only production dependencies
FROM node:18-alpine AS runner

# Set NODE_ENV to production to avoid installing devDependencies
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Copy only necessary files from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]

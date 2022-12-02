# Week Twelve

## Monday

So I didn't figure out what's up with my static assets over the break.

In this class we're setting up a redis server on our kubernetes thing. I tried to do this earlier, but I was too lazy to actually get it set up. I did set up a simple kubernetes redis image / container / whatever they're called, but I couldn't figure out how to make the data "persist" through resets / whatever without having to do all the fancy stuff that I didn't want to do.

This probably means that I can get rid of the redis stuff in my docker container. I am glad to finally be rid of it.

So here are the steps I did:

- Create the `redis.yaml` file.
- Create a new redis secret for the redis password stuff: `kubectl create secret generic redis-secrets-pw --from-literal=REDIS-PASS=<password>`.
- Apply the `.yaml` file: `kubectl apply -f redis.yaml`.

Okay I've started it and the public static hosted stuff suddenly works and I changed absolutely hecking nothing.

Neat. I won't complain. I'm guessing I didn't properly delete an existing pod or something, who knows. I don't!

Now that the redis thingy is up and running, I'm guessing we're going to change our original yaml thing so it connects to the new redis thing instead of whatever we've been using so far. Ironically I haven't been having the redis problems that everyone else has because I decided to do it in the worst possible way...

Also new-ish word: `Headless Service`. We're talking to it on the local network, who needs IP address?

Unfortunately I'm getting an error when I try to actually get this thing running... I'm getting a `CreateContainerConfigError`... And it's not telling me why exactly... Do I have to get logs from something else? What exactly is the error?

Anyway before I worry about that, let me grab the redis password from the secret. This secret is loaded as an enviroment variable... Is this more or less secure than having it be a file?

Okay, after changing stuff around, now both containers are returning `CreateContainerConfigError`...

I'll figure this out next class I guess. I definitely messed up something somewhere.

## Wednesday

We watched a video from someone who has firm that seeks to high individuals with a certain set of skills. I guess that those individuals typically take classes like this one, hence why we are watching this interview.

Notes:

- "We don't employ developers... we don't build code / application".
  - Customers own those resources and employ their own developers.
  - They handle the infrastructure / stuff for these things (primarily through AWS).
- DevOps is neat.
- Students that understand the business side of stuff / outcomes + the engineering / tech side of that are cool.
- Looking for engineers who can understand the requirements of a business.
- Being a part of a team that's not just IT.
- IT people with soft skills / problem solving skills.
  - These are the things you copy and paste onto your resume from a list of "Top 10 Soft Skills to Lie About".
- Containerization / app modernization is cool. VMware / Kubernetes make this easier.
- Certifications can be more important than a 4 year degree. Picking up certifications and a degree makes one much more hire-able.
- On-shore resources need to be more than just skills, as you can get cheap labour outside of the US.
- Leadership / soft skills are very important.
- Being able to write well are kinda cool. I wonder if they'll appreciate my short stories.
- Making people feel dumb isn't good.
  - Even if they're being stupid, or are just stupid, you don't get paid to be smart. You get paid to make them feel smart.
  - Also don't be stupid yourself. Using big fancy words doesn't help anyone if you're trying to communicate clearly.
- Being able to lie / make yourself look good is critical.
- Forcing children to learn cursive is cool, because tradition?
- Communicating clearly is important.
- Lawyers are horrible people who say horrible things, and enjoy being horrible (according to the lawyer).
- Get the certs. Get the knowledge. Learn how to manipulate people. Make your resume look pretty.
- Learn how to speak publicly, and directly to individuals.
- Certifications are pretty cool (again), get them.
- Most certifications are cool. They're not hard to get. They are kinda expensive, but not *that* expensive when compared to dying of hunger.
- Some certifications are free for students.
- The reason why the company (being interviewed) exists, is because other companies can't find the right people.
- AWS Cloud Practitioner CERT is a cool thing to get.
- Communication is important. "Architects" tend to get paid more than engineers.

## Friday

Today we watched another video. I'll probably have to work on fixing the errors in my deployment myself.

- Who we're talking to:
  - The guy we're talking to made some mobile apps.
  - Helped build up the engineering department of an app called CLIP.
  - CTO of Say (asynchronous video messaging)
  - Founder of WildML, which allows for automated wildlife / livestock surveys.
  - VP of Engineering for a cookie shop. They mostly utilize AWS.
- Managed Services are pretty neat.
  - Examples:
    - Amazon DynamoDB
    - Amazon SQS
    - Amazon Lambda
    - Cube
    - Next.js on Vercel
    - Snowflake
  - I've used some of these Amazon ones.
  - Managed services allow for one to focus on business problems and not technological problems. The hard work of managing a service / database / infrastructure is done for you.
  - Scaling vertically / horizontally becomes a lot easier on such services.
- Pain points of his company:
  - Need for product-minded engineers.
    - Training engineers to be more business focused.
    - Similar to what the guy yesterday said.
- Things to do as a student:
  - Become a product-minded problem solver.
  - Focus on business values.
  - Gain relevant expedience.
- What does growth look like for engineers and IT professionals?
  - Tech lead / architect / engineer / etc.
  - Leadership is important as always.
  - Have a growth path in mind.
  - You do not work for fun. You work to survive.
  - Be as cut throat as possible, nothing will stand in your way.
- Knowledge is good to have. Get it.
- Technology changes fast, so having an understanding of base principals is important.
- Learning how to develop a product is important.
- Projects are neat, especially if they're something you can share or turn into a miniature business.
- Good soft skills are very important.

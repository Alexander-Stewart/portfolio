import RedesignImages from './img/redesign/RedesignImages.js'
import IterativeImages from './img/iterative/IterativeImages.js'
import DevelopmentImages from './img/development/DevelopmentImages.js'

export default {
    projects: {
          'redesign': {
            id: 'redesign',
            projectTitle: 'Responsive Redesign',
            subtitle: 'Responsively redesigning a website.',
            cardImage: RedesignImages.cardImg,
            mainImage: RedesignImages.redesignGif,
            contextText: [`This project had the goal of redesigning a website that
            had poor design practices. This redesign encompassed the entire design
            cycle, including hifi and lofi prototyping and a working html page.
            The website I chose to redesign is for Grove Street Apparel, an up and
            coming streetwear brand based of of Denton, Texas.`,
            ],
            problemText: [`Their website includes a pretty
            familiar shopping site setup. It includes a home page, and several
            pages showcasing their clothing and a checkout system. For the sake
            of this project, we will be focusing on the homescreen of the site.
            This redesign focuses on increasing user accessibility and following
            good usability principles.`,
            `Looking through their site, overall, they do a great job incorporating
            accessibility through there alternate image text. A place for improvement
            for accessibility include updating the contrast in the site and site
            typography.`
            ],
            problemImages: [RedesignImages.original],
            designIterationsText: [`When redesigning the site, lofi and hifi
            prototypes of the website were created. For lofi prototyping, the
            website was wireframed using Basalmiq, a wireframing application.
            After I created wireframes for iphones, ipads, and desktops, I moved
            on to highfi prototyping using Figma. I fleshed out the design of the
            website, and created a visual style design guide to follow for all
            interactable portions of the website.`, `Once I finished the
            prototypes, it was time to build the actual thing!`],
            designIterationsImages: [RedesignImages.iphone,RedesignImages.wireframe1,RedesignImages.desktop],
            solutionText: [`My redesign included the homepage, and incorporated
            interactive features such as a scroll button and interactions on hover
            with page features. The site responsively updated to fit different viewing
            sizes to enable the best viewing experience for all devices!`],
            solutionImages: [RedesignImages.new1, RedesignImages.new2],
            additionalImages: [],
            conclusionText: [`When making this site, I learned how useful
            Bootstrap is. It made aligning, and adding more nuanced features
            really easy! getting the sizing of the video correct was tricky,
            getting media how you want on a website can be difficult. Overall,
            I think this project went well, and the design is much more readable and
            user friendly!`],
          },


          'iterative': {
            id: 'iterative',
            projectTitle: 'Iterative Design',
            subtitle: 'Designing an interface for an emerging startup.',
            cardImage: IterativeImages.card,
            mainImage: IterativeImages.logo,
            contextText: [`Iterative prototyping is an essential part of creating
              user interfaces. Sketches help you visualize your ideas, weigh the
              benefits of alternative designs, and avoid premature decision
              making. In this project, three teammates and implemented these
              practices to design an interface for a startup called Pod People.`,
            ],
            problemText: [`Pod People is a startup centered around the podcast
              production workforce. They have curated a community of audio
              producers, writers, jorunalists, editors, engineers, sound
              engineers, and more. Using their expansive network, they help
              bring podcasts to life by finding the right people for any
              project. Podcast creators can register with Pod People to seek
              services ranging from engineer matchmaking, full-service production,
              and consultations.`, ``
            ],
            problemImages: [],
            designIterationsText: [`In thinking about Pod People's primary users,
            we wanted to create a visual experience that would bring potential
            customers all of the information they would need to know about Pod
            People in a professional environment. To start the iterative design
            process for that environment, we brainstormed by sketching 4 possible
            designs-- each including 3-4 pages. Below you will find each set of
            sketches created during the brainstorming phase.`,
            `After discussing each of the sketches in detail, we determined what
            we considered to be the most useful group of pages for Pod People's
            user group. We also discussed the elements of each sketch that we
            thought could be useful in the final design.`,
            <h5>Prototyping</h5>,
            `In order to prepare for user testing, we created a Figma Hi-Fi prototype.
            This prototype combined information from all of our wireframes into
            one place. We created a navigatable website that contained a home
            page, a testimonials page, and a registration process.`, `The feedback
            we recieved from our fellow classmates and industry profressional
            included:`,
            <ul>
              <li>Make text smaller when appropriate</li>
              <li>Add more images and backgrounds</li>
              <li>Background texture, straightforward</li>
              <li>What are the advantages to registering? Timeline? What will happen?</li>
              <li>Marketing and email stuff: name and email first, they select why?
              Go through like the wizard design</li>
            </ul>,
            `After incorporating the feedback into our figma design, we moved on
            into user testing.`,
            <h5>User Testing</h5>,
            `For our user testing, we conducted a Hypotheses that asked users to
            interact with several portions of our site. We wanted to measure each
            area of our site and access how users navigate through the design of
            the site. In this section you can find the testing guidelines and
            questions, the three user videos, and the post-test follow up questions
            that were conducted.`,
            <h5>Scenario</h5>,
            `You are a young YouTuber that wants to branch out into podcasting.
            You hear about PodPeople, a consulting and engineering service that
            helps people like you grow and build a high-quality podcast. You want
            to register and look at the website testimonials, then sign up for
            a full-service production from PodPeople. You are a novice at
            podcasting and are still in the early development phase of making a
            podcast. This is a prototype website, so there is not full
            functionality for the site. All forms and buttons are interactable.
            Click on form fields and buttons to have them automatically populated.`,
            `Three anonymous users completed our user tests. Check out their user
            tests below!`,
            <ul>
            <li><a href="https://app.usertesting.com/v/c0be6aee-ac88-42c5-81ec-3cd883bb1b54?encrypted_video_handle=ec7f8fb5-0b00-42ac-aa13-689cac8691e8&shared_via=link">User 1</a></li>
            <li><a href="https://app.usertesting.com/v/8e6c961f-4c1e-4024-8e6d-29840009296b?encrypted_video_handle=595de95a-f840-4881-83fd-0453b70f8c6f&shared_via=link">User 2</a></li>
            <li><a href="https://app.usertesting.com/v/06a4bd16-74c5-43e2-9d29-cd4a65bccccc?encrypted_video_handle=ccdfc83c-ec13-41e1-a29c-a9ece2506169&shared_via=link">User 3</a></li>
            </ul>,
            ],
            designIterationsImages: [IterativeImages.ServicesWireframe, IterativeImages.HomeWireframe],
            solutionText: [`After viewing the results from our user tests, we
              thought that the results were overall great! Users liked the ease
              and simplicity of the design and could easily navigate through the
              registration process. This was one of our goals of focusing on user
              registration and engagement of the service. One thing that was common
              and something that should be changed is the color scheme. All of
              the users agreed that the site was too "plain", and didn't reflect
              a webpage that would be for podcasters. We would want to find a
              color scheme that is more reflective of the creativity of podcasters.
              Another addition that users would like see are more pictures and
              content on each page. This would be added on a full edition of the
              page, and we could use the information that we didn't pull from the
              original website.`],
            solutionImages: [IterativeImages.final],
            additionalImages: [],
            conclusionText: [`Once we recieved our user feedback, our final step
              in this process was to reach out to PodPeople and let them know
              about our work. We drafted an email, and sent their way to let
              them know about our redesign. Hopefully they like the changes to
              the design we made, and can use the feedback we garnered to improve
              their webiste.`,
              `Overall, We thought this project was an eye opening experience in
              how redesigning a website may not leave you with the best design
              for a company. Websites have to be personalized. If they aren't
              enganging, people won't want to engage with them!`],
          },

          'development': {
            id: 'development',
            projectTitle: 'Festival Lineup Generator',
            subtitle: 'Learning to build a responsive React website.',
            cardImage: DevelopmentImages.card,
            mainImage: DevelopmentImages.main,
            contextText: [
              `For my user interface course, we were assigned to create
              a website that is centered around generating a stateful website using React.
              At Brown University, the school puts on a concert series every year
              featuring the latest up and coming artists. Because of COVID, it
              is very unlikely we will get a Spring Weekend from the school.
              We can at least make our own lineups and imagine what the best
              weekend at Brown could have been like. The vast majority of the
              student population has no idea what the process is like for
              selecting or budgeting, so this is just a guess at what budget
              and selection would look like. You can select up to six artists
              to have in your lineup, and you will get metrics such as total
              cost and crowd approval based on the artists you selected. Once
              you have generated a lineup, you can save it so you can compare
              crowd approvals of the different lineups you can think up!`],
            problemText: [
              `A main problem that I had to focus
              on was implementing the site using good usability principles.
              Coding wise, challenges of this project included keeping track of
              stateful information and sorting based on how the
              user wants to organize the artists.`],
            problemImages: [],
            designIterationsText: [],
            designIterationsImages: [],
            solutionText: [`For this lineup generator, I included some artists
              that I have been listening to and that I think would fit well for
              the school's concert. Using React Bootstrap, I designed and
              implemented a card system that allows you to add artists to
              a lineup, and then save the lineup once you are satified.
              You can see certain stats about your lineup, such as what
              the total price would be and the crowd approval of the lineup.
              When you are ready, you can save your lineup. Once saved, you
              can load the lineup again and compare it to other lineup choices.`],
            solutionImages: [],
            additionalImages: [],
            conclusionText: [`React is very powerful when dealing with Stateful
              webpages! If something is changing based on user actions, I should
              think about using React.`],
          },
    }
};

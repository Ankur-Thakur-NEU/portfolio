import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware, software, and technologies I use to design and code',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, technologies, and practices I use for software engineering and development."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Languages & Frameworks</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>JavaScript/TypeScript</strong> - My primary programming languages for web development
                  </ListItem>
                  <ListItem>
                    <strong>Angular (6-18)</strong> - Extensive experience with component architecture and reactive programming
                  </ListItem>
                  <ListItem>
                    <strong>React</strong> - For building responsive and interactive user interfaces
                  </ListItem>
                  <ListItem>
                    <strong>Node.js</strong> - For backend development and tooling
                  </ListItem>
                  <ListItem>
                    <strong>.NET Core & C#</strong> - For enterprise backend development
                  </ListItem>
                  <ListItem>
                    <strong>HTML5, CSS/Sass</strong> - For crafting beautiful, responsive UIs
                  </ListItem>
                  <ListItem>
                    <strong>Python</strong> - For automation and utility scripts
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Tools & Platforms</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Azure (Pipelines, DevOps)</strong> - For CI/CD and project management
                  </ListItem>
                  <ListItem>
                    <strong>AWS (S3, EC2)</strong> - Cloud infrastructure and hosting
                  </ListItem>
                  <ListItem>
                    <strong>GitHub</strong> - Version control and collaboration
                  </ListItem>
                  <ListItem>
                    <strong>Jira</strong> - Project tracking and agile workflow management
                  </ListItem>
                  <ListItem>
                    <strong>Next.js</strong> - React framework for production web applications
                  </ListItem>
                  <ListItem>
                    <strong>Redux</strong> - For state management in larger applications
                  </ListItem>
                  <ListItem>
                    <strong>Webpack</strong> - Module bundling for production applications
                  </ListItem>
                  <ListItem>
                    <strong>Esbuild</strong> - For faster build processes (70% improvement in build times)
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Databases & Integration</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>SQL Server</strong> - For enterprise data management
                  </ListItem>
                  <ListItem>
                    <strong>PostgreSQL</strong> - Open-source relational database
                  </ListItem>
                  <ListItem>
                    <strong>Cosmos DB</strong> - NoSQL database for globally distributed applications
                  </ListItem>
                  <ListItem>
                    <strong>API Management</strong> - For creating and managing API gateways
                  </ListItem>
                  <ListItem>
                    <strong>SSIS</strong> - SQL Server Integration Services for ETL processes
                  </ListItem>
                  <ListItem>
                    <strong>Informatica</strong> - Data integration and management
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development Practices</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Agile Development</strong> - Scrum and Kanban methodologies
                  </ListItem>
                  <ListItem>
                    <strong>Test-Driven Development (TDD)</strong> - For reliable code
                  </ListItem>
                  <ListItem>
                    <strong>CI/CD</strong> - Continuous integration and deployment
                  </ListItem>
                  <ListItem>
                    <strong>UX Design</strong> - Creating intuitive user experiences
                  </ListItem>
                  <ListItem>
                    <strong>Accessibility</strong> - Building inclusive applications
                  </ListItem>
                  <ListItem>
                    <strong>Performance Optimization</strong> - For fast-loading applications
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Emerging Technologies</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Power Apps</strong> - For low-code application development
                  </ListItem>
                  <ListItem>
                    <strong>Ruby on Rails</strong> - Web application framework
                  </ListItem>
                  <ListItem>
                    <strong>GoLang</strong> - For efficient server-side applications
                  </ListItem>
                  <ListItem>
                    <strong>Rust</strong> - Systems programming with safety guarantees
                  </ListItem>
                  <ListItem>
                    <strong>Micro-Interactions</strong> - Enhancing user interface experiences
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System & Setup</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built PC</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 11 / Ubuntu</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome / Firefox</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Code Editor</TableHeadCell>
                    <TableCell>VS Code / Visual Studio</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Terminal</TableHeadCell>
                    <TableCell>Windows Terminal / WSL2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Dell Alienware M15 R3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

export default Uses;

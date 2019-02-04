import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"/home/centos/ron-demo/test-fsf/fsf/src/test/resources/FSF-Rules-1008-1002.feature:13"},
        plugin = {"json:/home/centos/ron-demo/test-fsf/fsf/target/cucumber-parallel/3.json", "html:/home/centos/ron-demo/test-fsf/fsf/target/cucumber-parallel/3", "rerun:/home/centos/ron-demo/test-fsf/fsf/target/cucumber-parallel/3.txt"},
        monochrome = true,
        glue = {"demo.web.test.fr"})
public class Parallel03IT extends AbstractTestNGCucumberTests {
}

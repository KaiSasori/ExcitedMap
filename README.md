# ExcitedMap
A map that makes you Excited!
## 我们完成的内容
一个全功能的，采用Spring Boot + MyBatis（下称SM）框架的“旅游景观大众点评系统”。我们给它起名为“ExcitedMap”，是因为我们希望每个用户都能感到耳目一新，非常“Excited”。

用户可以用它来获取周围的旅游景观的多媒体信息，查看别人的评价并发布自己的评价。另外，还有部分社交功能，如分享景点、标记自己喜欢的景点等。
## 采用的技术
### 前端

### 后端
使用SM框架实现，并采用了Jackson JSON Processor、MyBatis Generator和MyBatis-Spring-Boot-Starter。使用MySQL作为数据库。
+ Spring Boot是最新推出的便于Spring应用开发的微框架，预配置了一系列Spring组件和其他常用开发环境的依赖（如MySQL Connector/J），同时内嵌Tomcat，免去了配环境的痛苦，提高了项目的独立性。而且，Spring Boot支持使用`public static void main()`来启动服务器，启动时间比系统环境自带的Tomcat更短。另外，在服务器运行时修改的静态资源可以实时映射到服务器中，不需要重启服务器，也不会有奇奇怪怪的缓存问题，体验十分愉悦。本项目使用的`@RestController`是Spring Web组件的一部分，所以也可以说是使用了SSM框架（Spring + Spring MVC + MyBatis）。Spring Boot只是方便了Spring + Spring MVC的开发，并不提供额外功能。
+ MyBatis可以让开发者在配置文件中写好SQL语句，并用接口（interface）的方式方便地设定好从数据库返回的内容和类型，避免了手写大量重复的JDBC代码。MyBatis-Spring-Boot-Starter是MyBatis为Spring Boot推出的整合模块，可以将MyBatis的功能无缝整合到Spring Boot中。最后的效果是，不用再手动去生成数据库的连接池并在需要使用数据库时每次从池中取得一个连接，用完了再释放连接。只需要调用[Mapper接口](./ExcitedMap/src/main/java/com/excitedmap/dao)就能实现查询。精力就可以更加集中在业务实现上，而不是底层细节上。同时，还采用了MyBatis Generator，它可以在设计好数据库表结构后，直接逆向生成[POJO](./ExcitedMap/src/main/java/com/excitedmap/pojo)、[MyBatis XML Mapper](./ExcitedMap/src/main/java/com/excitedmap/mapping)（即保存SQL语句的XML文件）、以及[Mapper接口](./ExcitedMap/src/main/java/com/excitedmap/dao)，这就是数据库“逆向工程”的概念。这样可以免去编写大量POJO和基本增删查改（CRUD）SQL语句的不必要的重复劳动。由MyBatis Generator自动生成的POJO，对于单表操作（如直接读取一个用户的信息），是足够用的。但对于复杂的操作（如通过用户ID取得用户的所有足迹）还是不行的。这时，可以再使用继承简单POJO的方式编写更加复杂的POJO（如本项目中的[SpotImpl.java](./ExcitedMap/src/main/java/com/excitedmap/pojo/SpotImpl.java)），同时，再编写相应的[MyBatis XML Mapper](./ExcitedMap/src/main/java/com/excitedmap/mapping)（文件名以Impl结尾的是自己写的，其它是自动生成的），并继承自动生成的简单XML，这样就可以做到高度重用自动生成的代码，且有着将自动生成代码和手写代码清晰地分离的好处，便于以后数据库表结构修改时可以重新自动生成代码，而不影响自己实现的业务逻辑SQL语句。
+ Jackson JSON Processor可以自动双向转化后端的POJO和HTTP中的JSON对象，免去了手动序列化和反序列化POJO的繁复劳动，达到前后端的统一设计。
+ 本项目使用了[SimpleCaptcha](http://simplecaptcha.sourceforge.net/)验证码API。SimpleCaptcha具有使用简单、稳定性好、验证码强度高、无需调用第三方服务的优点。本项目使用含有英文与数字的图形验证码进行登陆验证，而且每个验证码只能被挑战一次，确保安全。

### 项目管理
由于大型工程要使用大量的依赖包，依靠手动下载各个包再手动添加到Build Path的方法不能满足组员们之间协作的需求，因为组员们使用不同的平台和不同的IDE。更重要的是，这样不易于在多平台上移植本项目，也不易于管理依赖包的版本。所以，本项目采用了Maven来管理依赖包。在[pom.xml](./ExcitedMap/pom.xml)中，通过添加需要的依赖包名字及其版本，Maven就可以自动通过Maven Central Repository获取到依赖包并添加到工程中。这样，就避免了依赖包和项目文件一起打包占用额外空间，而且代码在多平台上移植困难的问题。

本项目中，组员们使用Github进行协作。一些组员第一次接触Github和git，在组员的互相帮助下，学会了Github和git的基本使用方法，为项目的顺利完成节约了大量的时间和精力。
## 心得体会

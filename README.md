# ExcitedMap
A map that makes you Excited!
## 我们完成的内容
一个全功能的，采用Spring Boot + MyBatis（下称SM）框架的“旅游景观大众点评系统”。我们给它起名为“ExcitedMap”，是因为我们希望每个用户都能感到耳目一新，非常“Excited”。

用户可以用它来获取周围的旅游景观的多媒体信息，查看别人的评价并发布自己的评价。另外，还有部分社交功能，如分享景点、标记自己喜欢的景点等。
## 采用的技术
### 前端
### 负责成员：高金凯、朱宇奇
高金凯：
负责内容：
1、使用AngularJS前端框架，完成静态页面的实现。并且负责页面的设计与美化。
2、自学Ionic，完成手机端的布局和应用。

朱宇奇：
负责内容：
1、使用AngularJS前端框架，在高金凯同学静态页面的框架上，实现本Project所有的功能点。
2、自学百度API，熟练调用API完成功能点，并重写了部分百度API与Ionic框架冲突的部分函数，使功能点可以顺利完成。
3、通过JavaScript，完成与后端接口的调用。

###实现思路：

###前端框架AngularJS。
这是我第一次在实战中使用AngularJS在项目中进行开发，下面我来谈谈自己project过程中的对AngularJS感悟和思考。

###心得体会————朱宇奇
1、AngularJS 路由
AngularJS 路由 允许我们通过不同的URL访问不同的内容。
通过AngularJS可以实现多视图的单页Web应用（single page web application，SPA）。
这个优点，在这次的project中，让我们如虎添翼，大大减少了我们布局的难度，使得我们可以快速上手，通过路由，轻松完成页面的多视图切换。
在app.js中设定好 路由 以后，通过 $state.go(); 的方式，我们就可以轻松完成页面的切换。

2、AngularJS 控制器
AngularJS 应用程序被控制器控制。ng-controller 指令定义了应用程序控制器。
本次project中，我们所有的控制器都在 app.js 中，通过路由，完成与页面的绑定。
所有 controller 的具体实现，都在 controller.js 中。实现过程中，通过不同的 controller 对不同的字视图进行控制，快捷高效，同时代码结构非常清晰，可以很简单的明白那个函数在哪个页面中被调用。

3、AngularJS Scope(作用域)
Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
通过{{}}的方式，我们可以将 $scope 对象当作一个参数传递，这种方式便于我们修改页面上的文字，参数。
本次project中，我在实现功能点的时候，最大的感悟就是，Scope函数和变量的优势，父子标签页面间变量传递非常方便，下级作用域中可以调用上级作用域中的 变量 和 函数，这一优点，大大简化了我们在构造 function 时传递参数的数量，无需多次传递统一变量。

4、AngularJS ng-repeat
ng-repeat指令生效在需要循环内容的元素上，items和控制器上的变量名对应，item是为数组中单个对象起的别名。$index可以返回当前引用对象的序号，从0开始，另外还有$first、$middle、$last可以返回布尔值，用于告诉你当前元素是否是集合中的第一个中间的最后一个元素。
本次project中，ng-repeat无疑是一个巨大的“功臣”。在生成景观的列表的时候，我们只需要在 controller 的 $scope 中定义好景点列表的值，如：$scope.spotList ，然后，在生成列表视图的时候，我们可以调用 ng-repeat 方式，进行页面生成。
代码如下：
<ion-view>
    <ion-content class="padding">
        <ion-item class="item item-avatar" ng-repeat="spot in spotList" ng-click="goSpot(spot)">
            <p>{{spot.spotName}}</p>
            <p>{{spot.nameString + " " + spot.rating}}</p>
        </ion-item>
    </ion-content>
</ion-view>
短短几行代码，就是在页面中生成整个的景观列表。

###地图显示：百度地图API。
百度地图JavaScript API是一套由JavaScript语言编写的应用程序接口，可帮助您在网站中构建功能丰富、交互性强的地图应用，支持PC端和移动端基于浏览器的地图应用开发，且支持HTML5特性的地图开发。
对于百度地图API的调用方式，百度官网有各种实例，这里我就不一一列举了。我来谈谈我调用百度地图API的直观感受。

###心得体会————朱宇奇
百度地图API，调用非常简便，但是，我在project的实现过程中，在这方面遇到的问题最多的，是百度地图API与Ionic框架布局的冲突。
这一冲突，主要体现在，两者布局的z-index上。在写project过程中，我发现许多百度地图API自带的监听事件，在百度官网的测试中，是可以监听到的，但是，在加入ionic框架以后，会出现点击页面，事件无法监听的现象。通过直接观察百度地图API源码发现，应该是因为ionic的布局，使得百度地图API的某一个图层被置于了下方，所以，百度地图API自带的click事件监听无法被监听到，只有地图上的marker的监听事件依旧有效。
然而，我们的project要求实现景观评论的标签添加，以及线路规划，都需要在地图上进行点击事件。
这个问题，困扰了我很久，最终，我通过在地图表面添加覆盖层，自己重写AddClickListener的方式，终于能够监听到百度地图的点击事件，最终，顺利完成了本次project。

### 后端
使用SM框架实现，并采用了Jackson JSON Processor、MyBatis Generator和MyBatis-Spring-Boot-Starter。使用MySQL作为数据库。
+ Spring Boot是最新推出的便于Spring应用开发的微框架，预配置了一系列Spring组件和其他常用开发环境的依赖（如MySQL Connector/J），同时内嵌Tomcat，免去了配环境的痛苦，提高了项目的独立性。而且，Spring Boot支持使用`public static void main()`来启动服务器，启动时间比系统环境自带的Tomcat更短。另外，在服务器运行时修改的静态资源可以实时映射到服务器中，不需要重启服务器，也不会有奇奇怪怪的缓存问题，体验十分愉悦。本项目使用的`@RestController`是Spring Web组件的一部分，所以也可以说是使用了SSM框架（Spring + Spring MVC + MyBatis）。Spring Boot只是方便了Spring + Spring MVC的开发，并不提供额外功能。
+ MyBatis可以让开发者在配置文件中写好SQL语句，并用接口（interface）的方式方便地设定好从数据库返回的内容和类型，避免了手写大量重复的JDBC代码。MyBatis-Spring-Boot-Starter是MyBatis为Spring Boot推出的整合模块，可以将MyBatis的功能无缝整合到Spring Boot中。最后的效果是，不用再手动去生成数据库的连接池并在需要使用数据库时每次从池中取得一个连接，用完了再释放连接。只需要调用[Mapper接口](./ExcitedMap/src/main/java/com/excitedmap/dao)就能实现查询。精力就可以更加集中在业务实现上，而不是底层细节上。同时，还采用了MyBatis Generator，它可以在设计好数据库表结构后，直接逆向生成[POJO](./ExcitedMap/src/main/java/com/excitedmap/pojo)、[MyBatis XML Mapper](./ExcitedMap/src/main/java/com/excitedmap/mapping)（即保存SQL语句的XML文件）、以及[Mapper接口](./ExcitedMap/src/main/java/com/excitedmap/dao)，这就是数据库“逆向工程”的概念。这样可以免去编写大量POJO和基本增删查改（CRUD）SQL语句的不必要的重复劳动。由MyBatis Generator自动生成的POJO，对于单表操作（如直接读取一个用户的信息），是足够用的。但对于复杂的操作（如通过用户ID取得用户的所有足迹）还是不行的。这时，可以再使用继承简单POJO的方式编写更加复杂的POJO（如本项目中的[SpotImpl.java](./ExcitedMap/src/main/java/com/excitedmap/pojo/SpotImpl.java)），同时，再编写相应的[MyBatis XML Mapper](./ExcitedMap/src/main/java/com/excitedmap/mapping)（文件名以Impl结尾的是自己写的，其它是自动生成的），并继承自动生成的简单XML，这样就可以做到高度重用自动生成的代码，且有着将自动生成代码和手写代码清晰地分离的好处，便于以后数据库表结构修改时可以重新自动生成代码，而不影响自己实现的业务逻辑SQL语句。
+ Jackson JSON Processor可以自动双向转化后端的POJO和HTTP中的JSON对象，免去了手动序列化和反序列化POJO的繁复劳动，达到前后端的统一设计。
+ 本项目使用了[SimpleCaptcha](http://simplecaptcha.sourceforge.net/)验证码API。SimpleCaptcha具有使用简单、稳定性好、验证码强度高、无需调用第三方服务的优点。本项目使用含有英文与数字的图形验证码进行登陆验证，而且每个验证码只能被挑战一次，确保安全。
+ 本项目做到了良好的前后端分离。前端和后端之间用AJAX通信，服务器端不生成动态页面，前端通过调用后端RESTful API来增删查改资源。使用session（即cookie）作为权限认证的方法。对于无权访问的功能（如在没有登陆的情况下想要发表评论），后端将会返回合适的HTTP状态码（如`401 Unauthorized`）。
+ 本项目中，所有需要对数据库进行多步操作的业务逻辑都实现了原子化。比如，在[ReviewServiceImpl.java](./ExcitedMap/src/main/java/com/excitedmap/service/impl/ReviewServiceImpl.java#L41)中，`addReview`方法使用了由Spring提供的`@Transactional`注解，可以将一个方法中的所有数据库操作合并原子化。在复杂业务逻辑中，如果不这么做可能导致数据库产生不一致（inconsistency）。该注解的使用需要[配置事务管理](./ExcitedMap/src/main/resources/spring-mybatis.xml#L53)。

### 项目管理
由于大型工程要使用大量的依赖包，依靠手动下载各个包再手动添加到Build Path的方法不能满足组员们之间协作的需求，因为组员们使用不同的平台和不同的IDE。更重要的是，这样不易于在多平台上移植本项目，也不易于管理依赖包的版本。所以，本项目采用了Maven来管理依赖包。在[pom.xml](./ExcitedMap/pom.xml)中，通过添加需要的依赖包名字及其版本，Maven就可以自动通过Maven Central Repository获取到依赖包并添加到工程中。这样，就避免了依赖包和项目文件一起打包占用额外空间，而且代码在多平台上移植困难的问题。

本项目中，组员们使用Github进行协作。一些组员第一次接触Github和git，在组员的互相帮助下，学会了Github和git的基本使用方法，为项目的顺利完成节约了大量的时间和精力。

## 部署方式
+ 首先，在你的MySQL数据库中创建一个名为`ExcitedMap`的Database Schema，并导入[SQL表结构](./ExcitedMap.sql)到这个Schema中（更推荐导入[带演示数据的SQL表结构](./ExcitedMapWithData.sql)，便于演示网站功能），并在[配置文件](./ExcitedMap/src/main/resources/jdbc.properties)中设定好数据库连接地址、数据库用户名和密码。
+ 然后，用Java EE 版Eclipse将[ExcitedMap文件夹](./ExcitedMap)作为一个工程打开或导入。（请使用最新版Eclipse，这样可以不用另外安装Maven。）
+ 接着，可能需要让Maven下载项目的依赖包（在Eclipse中右击已导入的工程->Maven->Update Project）。
+ 最后，在Eclipse中打开[Application.java](./ExcitedMap/src/main/java/com/excitedmap/Application.java)，点击Run即可。

## 心得体会

###心得体会————侯天朗

####工作内容
在本项目中，我做得工作涉及的面比较广，主要有以下四部分：
+	各个加分点的实现（第三方登录、自动化测试、3D模型上传和显示等等）
+	前端的注册登录功能
+	网站引导页和关于页面的编写
+	后端一部分service和controller模块的实现。

####遇到的问题和解决方法
问题1：QQ为了保证用户信息安全，不允许将localhost:8080作为网站地址和回调地址，怎么处理?
解决方案：安装内网穿透利器ngrok，将本地部署的网站让外网能直接访问到。于是，用户访问http://map.tunnel.qydev.com/www/index.html#即可体验ExcitedMap。

问题2：本项目的前端采用AngularJS框架，URL中会出现”#”，而使用QQ第三方登录的回调地址里面不允许包含”#”这个符号，怎么破？
解决方案：在框架之外建一个跳转页面，避免”#”的出现，实现过渡。

问题3：自动化测试工具纷繁复杂，如何选择适合本项目的测试工具？
解决方案：我请教了戴老师，戴老师推荐了Jmeter。JMeter是Apache组织开发的基于Java的自动化测试工具，简单易用。在此次Project中，我使用JMeter测试了后台的接口和网站的性能。

问题4：最初配置Spring Boot时，内置的Tomcat一直报错。
解决方案：使用端口查看器，发现8080端口被虚拟机的vmnat进程占用了，关闭虚拟机的进程即可。

####个人感想
通过这个项目的实践，无论是前端还是后端，我都学到了很多东西。
首先，新框架的推出改善了生产环境。之前Spring MVC+Hibernate给我的印象不太友好（配置复杂、启动慢、修改代码后需要手动重启等等），但这次Spring Boot框架的出现无疑大大减轻了程序员配置环境的压力，提升了修改代码的效率。
其次，通过后台的编写，我在实战中第一次运用了RESTful的架构风格，对课堂所学知识有了直观的认识。感谢周信安同学有关RESTFUL风格编码方面对我的指导。
再次，我第一次使用AngularJS框架，所以刚开始在写前端注册登录页面的时候比较茫然，感谢另外一组的陈高星同学的讲解，我明白了如何使用这个框架，每个模块的作用是什么，如何绑定数据和按钮等等。在后期第三方登录整合到框架的过程中，感谢朱宇琦同学的帮助。

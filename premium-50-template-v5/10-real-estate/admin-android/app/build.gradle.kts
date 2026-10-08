plugins{id("com.android.application");id("org.jetbrains.kotlin.android");id("org.jetbrains.kotlin.plugin.compose")}
android{namespace="com.premium.template.adminandroid.admin";compileSdk=35
 defaultConfig{applicationId="com.premium.template.adminandroid.admin";minSdk=26;targetSdk=35;versionCode=1;versionName="2.0.0"}
}
dependencies{implementation(platform("androidx.compose:compose-bom:2024.12.01"));implementation("androidx.activity:activity-compose:1.10.0");implementation("androidx.compose.material3:material3");implementation("androidx.compose.material:material-icons-extended");implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7");implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.9.0")
testImplementation("junit:junit:4.13.2")}
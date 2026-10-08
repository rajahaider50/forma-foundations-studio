package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CoursesScreen(onCreate:()->Unit){Card{Column{Text("Courses");Text("Domain-specific courses workflow");Button(onClick=onCreate){Text("Create")}}}}

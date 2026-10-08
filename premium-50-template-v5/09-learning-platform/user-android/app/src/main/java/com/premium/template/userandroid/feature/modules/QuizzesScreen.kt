package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun QuizzesScreen(onCreate:()->Unit){Card{Column{Text("Quizzes");Text("Domain-specific quizzes workflow");Button(onClick=onCreate){Text("Create")}}}}

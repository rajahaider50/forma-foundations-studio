package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun QuestionsScreen(onCreate:()->Unit){Card{Column{Text("Questions");Text("Domain-specific questions workflow");Button(onClick=onCreate){Text("Create")}}}}

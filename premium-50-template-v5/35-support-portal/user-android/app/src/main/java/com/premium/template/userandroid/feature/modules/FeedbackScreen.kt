package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FeedbackScreen(onCreate:()->Unit){Card{Column{Text("Feedback");Text("Domain-specific feedback workflow");Button(onClick=onCreate){Text("Create")}}}}

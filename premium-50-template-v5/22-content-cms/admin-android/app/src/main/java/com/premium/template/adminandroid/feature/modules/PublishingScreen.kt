package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PublishingScreen(onCreate:()->Unit){Card{Column{Text("Publishing");Text("Domain-specific publishing workflow");Button(onClick=onCreate){Text("Create")}}}}

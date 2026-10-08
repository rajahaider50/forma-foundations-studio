package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PromptsScreen(onCreate:()->Unit){Card{Column{Text("Prompts");Text("Domain-specific prompts workflow");Button(onClick=onCreate){Text("Create")}}}}
